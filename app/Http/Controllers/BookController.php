<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Http\Resources\BookCollectionResource;
use App\Http\Resources\BookResource;
use App\Models\Book;
use OpenApi\Attributes as OA;


class BookController extends Controller
{
    #[OA\Get(
        path: "/api/books",
        summary: "Get all books (id and title only)",
        tags: ["Books"],
        responses: [
            new OA\Response(
                response: 200,
                description: "List of books",
                content: new OA\JsonContent(
                    type: "array",
                    items: new OA\Items(ref: "#/components/schemas/BookShort")
                )
            )
        ]
    )]
    public function index()
    {
        return BookCollectionResource::collection(Book::all());
    }
    
    #[OA\Post(
        path: "/api/books",
        summary: "Store a book",
        tags: ["Books"],
        requestBody: new OA\RequestBody(
            required: true,
            description: "Book data to create",
            content: new OA\JsonContent(
                type: "object",
                properties: [
                    new OA\Property(property: "title", type: "string", example: "New book title"),
                    new OA\Property(property: "author", type: "string", example: "Charity Kutch I"),
                    new OA\Property(property: "genre", type: "string", example: "dolores"),
                    new OA\Property(property: "publisher", type: "string", example: "Langworth and Sons"),
                    new OA\Property(property: "publication_date", type: "string", format: "date", example: "1973-06-29"),
                    new OA\Property(property: "price_usd", type: "number", format: "float", example: 54.46),
                    new OA\Property(property: "word_count", type: "integer", example: 44173),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 201,
                description: "Book created successfully",
                content: new OA\JsonContent(
                    ref: "#/components/schemas/Book"
                )
            ),
            new OA\Response(
                response: 422,
                description: "Validation error"
            )
        ]
    )]
    public function store(StoreBookRequest $request)
    {
        $book = Book::create($request->validated());
        
        return response()->json([
            'message' => 'Book created successfully.',
            'data' => new BookResource($book),
        ],201);
    }
    
    #[OA\Get(
        path: "/api/books/{id}",
        summary: "Get book by id",
        tags: ["Books"],
        parameters: [
            new OA\Parameter(
                name: "id",
                in: "path",
                description: "ID of the book",
                required: true,
                schema: new OA\Schema(type: "integer")
            )
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: "Book found",
                content: new OA\JsonContent(
                    ref: "#/components/schemas/Book"
                )
            ),
            new OA\Response(
                response: 404,
                description: "Book not found"
            )
        ]
    )]
    public function show(Book $book)
    {
        return new BookResource($book);
    }
    
    #[OA\Put(
        path: "/api/books/{id}",
        summary: "Update book by id",
        tags: ["Books"],
        parameters: [
            new OA\Parameter(
                name: "id",
                in: "path",
                description: "ID of the book",
                required: true,
                schema: new OA\Schema(type: "integer")
            )
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: "Book updated successfully",
                content: new OA\JsonContent(
                    ref: "#/components/schemas/Book"
                )
            ),
            new OA\Response(
                response: 404,
                description: "Book not found"
            )
        ]
    )]
    public function update(UpdateBookRequest $request, Book $book)
    {
        $book->update($request->validated());
        
        return response()->json([
            'message' => 'Book updated successfully.',
            'data' => new BookResource($book->fresh()),
        ]);
    }
    
    #[OA\Delete(
        path: "/api/books/{id}",
        summary: "Delete book by id",
        tags: ["Books"],
        parameters: [
            new OA\Parameter(
                name: "id",
                in: "path",
                description: "ID of the book",
                required: true,
                schema: new OA\Schema(type: "integer")
            )
        ],
        responses: [
            new OA\Response(
                response: 204,
                description: "Book deleted successfully"
            ),
            new OA\Response(
                response: 404,
                description: "Book not found"
            )
        ]
    )]
    public function destroy(Book $book)
    {
        $book->delete();
        
        return response()->json([
            'message' => 'Book deleted successfully.',
        ],204);
    }
}
