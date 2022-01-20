# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e
# calcule a # porcentagem de livros em cada categoria, em relação ao número
# total de livros. O resultado deve ser escrito em um arquivo no formato
# CSV como o exemplo abaixo.
import json
import csv


def retrieve_books(file):
    return [json.loads(line) for line in file]


def count_books_by_categories(books):
    books_categories = {}
    for book in books:
        for category in book["categories"]:
            if category not in books_categories:
                books_categories[category] = 0
            books_categories[category] += 1
    return books_categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("file_exercise4.json") as file:
        books = retrieve_books(file)
    book_count_by_category = count_books_by_categories(books)
    total_books = len(books)
    books_categories_percentage = calculate_percentage_by_category(book_count_by_category, total_books)
    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_categories_percentage)
