use railway;

CREATE TABLE alphabets (
    alphabet_id BIGINT NOT NULL AUTO_INCREMENT,
    own_count INT,
    created_on DATETIME(6),
    updated_on DATETIME(6),
    alphabet VARCHAR(255),
    owner_name VARCHAR(255),
    PRIMARY KEY (alphabet_id)
);

INSERT INTO alphabets (alphabet, created_on, updated_on) VALUES
('A', NOW(), NOW()),
('B', NOW(), NOW()),
('C', NOW(), NOW()),
('D', NOW(), NOW()),
('E', NOW(), NOW()),
('F', NOW(), NOW()),
('G', NOW(), NOW()),
('H', NOW(), NOW()),
('I', NOW(), NOW()),
('J', NOW(), NOW()),
('K', NOW(), NOW()),
('L', NOW(), NOW()),
('M', NOW(), NOW()),
('N', NOW(), NOW()),
('O', NOW(), NOW()),
('P', NOW(), NOW()),
('Q', NOW(), NOW()),
('R', NOW(), NOW()),
('S', NOW(), NOW()),
('T', NOW(), NOW()),
('U', NOW(), NOW()),
('V', NOW(), NOW()),
('W', NOW(), NOW()),
('X', NOW(), NOW()),
('Y', NOW(), NOW()),
('Z', NOW(), NOW());

