# Expenses

## Impressions of Stencil JS

Based on the results of the test task I was able to try Stencil JS in practice. At first I had a feeling that it was hard to work with this technology, but after the first couple of hours it became clear that the principles of interaction with events and data are very similar to React. I haven't experienced any special problems, the only difficulties were with the styling of shadow components for switching the theme and not immediately understand the principle of the transfer of events from the descendant to the parent.

On the negative side, Stencil JS has poor community support, with some recommended libraries not supported for 4-6 years on its official website. When developing, you should pay special attention to separating business logic from the framework, because there is a high risk of rejecting it in the future due to lack of support.

## Frontend project structure

I tried to use an architecture similar to Redux. The project has a folder `stores` where the global state of the project is stored. Also, there is a folder `actions`, in which I focused the logic of the interaction with the server and stock updates.
This approach allows us to separate the logic of the application from its visual component and to limit the influence of the framework.

When using the holistic approach, it is important to remember about component purity and not to connect each component to a stor, but to pass data from parent to offspring. This approach allows you to reuse components in other projects with minimal effort.

I have made some simplifications to save time. For example, I use Typescript, but the typing is not 100% because it was not in the conditions of the task. Of course, in a working project I do not allow the absence of contracts.

Also, switching the theme was implemented without storing information about the theme in the storeroom. In the current project this would have been necessary.

## Backend project structure

I used the REST API to transfer the data. SQL light was used as a database solely because it was lightweight and easy to use. Prisma was chosen as the ORM, because it allows you to quickly and easily create models and interact with them, as well as easily replace the database with another.

## Project Launch

I use the `pnpm` package manager, but you are free to use `npm` or `yarn`.

Running the backend:

```bash
cd src/server
pnpm i
pnpx prisma migrate dev
pnpm dev
```

Running the frontend:

```bash
pnpm i
pnpm start
```