DROP TABLE [IF EXISTS] categories;

CREATE TABLE categories (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) UNIQUE NOT NULL,
   description VARCHAR(50) NOT NULL
);

CREATE TABLE products (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) UNIQUE NOT NULL,
   image VARCHAR NOT NULL,
   price INTEGER NOT NULL,
   description VARCHAR NOT NULL,
   isFav BOOLEAN NOT NULL DEFAULT false,
   category_id INTEGER,
   CONSTRAINT fk_category
      FOREIGN KEY(category_id)
         REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR(25) UNIQUE NOT NULL,
   password TEXT NOT NULL,
   image TEXT DEFAULT '/images/users/default-user-image.png',
   first_name TEXT NOT NULL,
   last_name TEXT NOT NULL,
   email VARCHAR(50) UNIQUE NOT NULL,
   favorites INTEGER [],
   product_id INTEGER,
   CONSTRAINT fk_product
      FOREIGN KEY(product_id)
         REFERENCES products(id) ON DELETE CASCADE
)

INSERT INTO products
   (prod_name, image, price, description, category_id)
   VALUES
   ('Graduation', '/images/shadowbox/graduation.png', 40, 'Customizable graduation day 3d-art. Add your graduates name and photo of your choice for a memorable gift. Colors can also be chosen to match school colors', 1),
   ('Heart Lock', '/images/shadowbox/heart-lock.png', 30, 'Give your special someone the key to your heart with this lovely 3d-art heart lock. Choose your own color theme and make it your own', 1),
   ('Howling Wolf', '/images/shadowbox/howling-wolf.png', 30, 'Detailed 3d-art of a Wolf howling at a full moon from a cliffside', 1),
   ('Love You', '/images/shadowbox/moon-and-back.png', 30, 'A great gift idea for that special someone, this vibrant 3d art piece has rich colors that really make the 3d effects pop right out of the frame.', 1),
   ('Newborn Boy', '/images/shadowbox/newborn-boy.png', 40, 'Customizable newborn boy 3d-art. Add the newborns name, birthday, picture, and weight. Makes a great memorable keepsake.', 1),
   ('Newborn Girl', '/images/shadowbox/newborn-girl.png', 40, 'Customizable newborn girl 3d-art. Add the newborns name, birthday, picture, and weight. Makes a great memorable keepsake.', 1),
   ('Pet Memorial', '/images/shadowbox/pet.png', 40, 'Customizable pet memorial 3d-art. Add your pets name, date of birth and their date of passing, pet can either be a cat or dog shadow. Front layer color can be changed to your liking.', 1),
   ('Smile', '/images/shadowbox/smile.png', 30, 'Spread some joy with this cheerful 3d-art design that just might make you smile', 1),
   ('USA', '/images/shadowbox/usa.png', 30, 'Express your love for your country with this patriotic 3d-art design depicting the American Flag', 1);

   INSERT INTO products
   (prod_name, image, price, description, category_id)
   VALUES
   ('Adulting Review', '/images/products/mugs/adulting-rating.png', 10, 'Adulting is difficult, so take a load off and enjoy your coffee', 3),
   ('Coffee and Mascara', '/images/products/mugs/coffee-mascara.png', 10, 'Coffee and Mascara, is there anything better?', 3),
   ('I Cuss a Little', '/images/products/mugs/cuss-a-little.png', 10, 'We all slip from time to time, so sit back and take a sip', 3),
   ('Mom Fuel', '/images/products/mugs/mom-fuel.png', 10, 'May your favorite ground roast be with you, Mom!', 3),
   ('Toddler Strong', '/images/products/mugs/toddler-strong.png', 10, 'When the going gets tough, the tough drink coffee', 3),
   ('I need Jesus', '/images/products/mugs/whole-lot-of-jesus.png', 10, 'Just remember, Jesus took a day off too. Enjoy that brew!', 3);
   

   
