export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611a1f848c68218ea959f4aa",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-iet35eb2",
                  apiId: "3eb2060b-ce1a-4864-b575-add7855dd1f5",
                },
                {
                  buildHookId: "611a1f84f4ea7acfea7c13bb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1rdi14cy",
                  apiId: "775cc351-7919-4afa-a7d3-b8f071222178",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sheetalsaadhu/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1rdi14cy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
