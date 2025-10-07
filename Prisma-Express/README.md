## Prima Setup:


1. Spin an express server | npm i express nodemon

2. Install prisma and a client to interact with Prisma | npm i prisma @primsa/client

3. Initialize Prisma in project | npx prisma init
    - schema.prisma file will be generated
    - contains DB config + Models(tables) that we want to create

4. Create model in prisma scehma 

5. Migrate schema | npx prisma migrate dev --name init
    - This will apply migrations to DB

6. Generate prisma client | npx prisma generate
    - Enables communitcation to DB through prisma