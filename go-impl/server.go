package main

import (
	"embed"
	"encoding/json"
	"fmt"
	"log"
	"strconv"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

type Row struct {
	Roots          []string `json:"roots"`
	Meaning        string   `json:"meaning"`
	OriginLanguage string   `json:"originLanguage"`
	Etymology      string   `json:"etymology"`
	Examples       []string `json:"examples"`
}

type Trie struct {
	Words    []int32         `json:"words"`
	Children map[string]Trie `json:"children"`
}

const ROWS_PER_PAGE = 50

//go:embed rows.json
var rowsFs embed.FS

//go:embed trie.json
var trieFs embed.FS

func main() {
	rowsText, _ := rowsFs.ReadFile("rows.json")
	var rows []Row
	_ = json.Unmarshal([]byte(rowsText), &rows)

	trieText, _ := trieFs.ReadFile("trie.json")
	var trie Trie
	err := json.Unmarshal([]byte(trieText), &trie)

	if err != nil {
		log.Print("Error unmarshalling")
		log.Fatal(err)
	}

	log.Printf("Unmarshaled %d rows, %d trie children", len(rows), len(trie.Children))

	engine := html.New("./go-impl/templates", ".html")
	engine.AddFunc("StringJoin", strings.Join)

	app := fiber.New(fiber.Config{
		Views: engine,
		// Prefork: true,
	})

	app.Static("/assets", "./src/assets")

	app.Get("/", func(c *fiber.Ctx) error {
		rowsForRender := rows[0:ROWS_PER_PAGE]

		return c.Render("index", fiber.Map{
			"Prompt":      "",
			"Rows":        rowsForRender,
			"CurrentPage": 1,
			"MaxPage":     (len(rows) / ROWS_PER_PAGE) + 1,
			"PrevUrl":     "",
			"NextUrl":     "/2",
		})
	})

	app.Get("/:page?", func(c *fiber.Ctx) error {
		page, err := strconv.Atoi(c.Params("page"))
		if err != nil {
			page = 0
		}

		rowsForRender := rows[max((page-1)*ROWS_PER_PAGE, 0):min(len(rows)-1, page*ROWS_PER_PAGE)]

		prevUrl := ""
		if page > 0 {
			prevUrl = fmt.Sprint(page - 1)
		}

		nextUrl := ""
		if page < (len(rows)/ROWS_PER_PAGE)+1 {
			nextUrl = "/" + fmt.Sprint(page+1)
		}

		return c.Render("index", fiber.Map{
			"Prompt":      "",
			"Rows":        rowsForRender,
			"CurrentPage": page,
			"MaxPage":     (len(rows) / ROWS_PER_PAGE) + 1,
			"PrevUrl":     prevUrl,
			"NextUrl":     nextUrl,
		})
	})

	app.Listen(":3000")
}
