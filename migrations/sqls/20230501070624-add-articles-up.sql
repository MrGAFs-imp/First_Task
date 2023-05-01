CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    status ENUM('published', 'unpublished'),
    updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_by VARCHAR(255) NOT NULL
);