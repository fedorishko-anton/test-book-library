<?php

namespace App\Docs;

use OpenApi\Attributes as OA;

#[OA\Info(
  version: "1.0.0",
  title: "Book API",
  description: "API documentation for Book Library"
)]
#[OA\Server(
  url: "http://localhost:8000",
  description: "Local server"
)]
class OpenApi {}