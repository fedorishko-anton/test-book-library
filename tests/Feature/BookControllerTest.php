<?php

namespace Tests\Feature;

use App\Models\Book;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BookControllerTest extends TestCase
{
    use RefreshDatabase;
    
    /** @test */
    public function test_list_books()
    {
        Book::factory()->count(10)->create();
        
        $response = $this->getJson('/api/books');
        
        $response->assertStatus(200)
            ->assertJsonCount(10,'data');
    }
    
    public function test_get_book()
    {
        $book = Book::factory()->count(1)->create()->first();
        $response = $this->getJson('/api/books/'.$book->id);
        
        $response->assertStatus(200)
            ->assertJson([
                'id' => $book->id,
                'title' => $book->title,
                'genre' => $book->genre,
            ]);
    }
    
    public function test_create_book()
    {
        $data = [
            'title' => 'New Book',
            'author' => 'Author Name',
            'genre' => 'Fiction',
            'publisher' => 'Publisher X',
            'publication_date' => '2026-03-30',
            'price_usd' => 19.99,
            'word_count' => 50000,
        ];
        
        $response = $this->postJson('/api/books', $data);
        
        $response->assertStatus(201)
            ->assertJsonFragment([
                'title' => 'New Book',
                'author' => 'Author Name',
            ]);
        
        $this->assertDatabaseHas('books', [
            'title' => 'New Book',
            'author' => 'Author Name',
        ]);
    }
    
    public function test_update_book()
    {
        $book = Book::factory()->count(1)->create()->first();
        
        $updateData = [
            'title' => 'Updated Title',
            'author' => 'Updated Author',
            'genre' => 'Non-Fiction',
            'publisher' => 'Publisher Y',
            'publication_date' => '2023-03-30',
            'price_usd' => 19.99,
            'word_count' => 25000,
        ];
        
        $response = $this->putJson('/api/books/'.$book->id, $updateData);
        
        $response->assertStatus(200)
        ->assertJsonFragment([
            'title' => 'Updated Title',
            'author' => 'Updated Author',
        ]);

        $this->assertDatabaseHas('books', [
            'id' => $book->id,
            'title' => 'Updated Title',
            'author' => 'Updated Author',
        ]);
    }
    
    
    public function test_delete_book()
    {
        $book = Book::factory()->count(1)->create()->first();
        $response = $this->deleteJson('/api/books/'.$book->id);
        
        $response->assertStatus(204);
    }
    
}
