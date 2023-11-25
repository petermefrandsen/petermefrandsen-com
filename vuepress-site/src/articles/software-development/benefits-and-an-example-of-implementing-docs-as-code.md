---
icon: pen-to-square
date: 2023-02-14
cover: /assets/images/articles/docs-as-code-patrick-fore.webp
category:
  - Software Development
tag:
  - Docs-as-Code
editLink: false
---

# Benefits and an example of implementing Docs-As-Code

In development teams, it is common and natural that the focus is on coding, testing, and deploying software. However, writing documentation is just as crucial because it is fundamental to effectively and efficiently communicate how the code works, its architecture and how to use it. Some types of documentation may also serve as a reference for future work, and for others, it may be to maintain the code.

Traditionally, documentation is stored in a separate document management system, but this creates a disconnect between the developers’ work and the documentation and because of this, we should turn towards the concept of “Docs-As-Code” or “DaC” for short. This approach involves treating documentation like code, including using the same version control systems, and using the same development tools and processes as they do for code.

## Benefits of Docs-As-Code

The benefits of implementing DaC in a development team include the following:

- **Improved Collaboration**: DaC enables developers to collaborate on documentation in real-time, making it easier to share and update information.

- **Enhanced version control**: By using version control systems such as Git, development teams can keep tracking their changes to the documentation, making it easier to go back to previous versions if necessary.

- **Consistent documentation**: By integrating documentation into the development process, teams can ensure that documentation is consistent with the code, e.g. by ensuring that pull requests include both code and documentation changes.

- **Better discoverability**: When documentation is stored alongside code, it is easier for developers to find and use, reducing the time and effort needed to get started on a new project.

- **Single source of truth**: by having the documentation alongside the code, the documentation can be treated like master data and be published to different target systems, such as confluence, without having a concern about it diverging from the source.

## Implementing Docs-As-Code

To implement DaC in a development team, it is important to focus on the following areas:

- **Choose the right tooling**: When it comes to documentation, there are many different tools and technologies available. Choose the right one that fits your team’s but more importantly your company’s needs. I suggest using Markdown in the source system and then using a documentation tool you publish your documentation to systems such as Confluence, Backstage, GitBook etc.

- **Set clear guidelines**: Teams implementing DaC should establish clear guidelines and best practices for writing and maintaining documentation. This includes and is not limited to who is responsible for updating it, and how changes should be reviewed and approved.

- **Integrate documentation into the development process**: Documentation should be treated on par with code and needs to be integrated into the development process, including code reviews, continuous integration and continuous delivery.

- **Encourage collaboration**: Teams need to encourage collaboration on documentation, including sharing ideas and feedback and making it easy for others to contribute.

- **Implement a scout mentality for documentation**: Documentation that is out of date needs to be fixed, as it could result in bugs in the future as well as misleading troubleshooting.

## Common Pitfalls

There are several common pitfalls to watch out for when implementing DaC:

- **Lack of ownership**: Documentation can be overlooked if there is no clear owner or if ownership is not well-defined.

- **Documentation not part of the pull-request flow**: If not reviewed and maintained regularly documentation quickly become outdated and the whole purpose of DaC fails to shine through.

- **Inconsistent documentation**: If no guidelines are present documentation can be inconsistent thus making it difficult to read, follow and maintain.

- **Poor tooling**: If the wrong tooling is chosen, teams may struggle with documentation management, including version control and collaboration.

## Example

> Markdown with MkDocs published to both GitHub pages and Confluence

In this example, we have a simple flow, where the code repository serves as the source of truth. When new documentation is added, the first GibHub workflow compiles the MkDocs and publishes this to GitHub pages. The second workflow takes the same Markdown files from the source and publishes those to Confluence using md2cf by Jack Gaino.

MkDocs has a direct implementation of how to publish the documentation to [GitHub Pages](https://www.mkdocs.org/user-guide/deploying-your-docs/#github-pages). 

The YAML file for my implementation looks like the following:

```yaml
name: build n' deploy MkDocs to GitHub page
on:
  push:
    branches:
      - main
    paths:
      - "docs/**"
      - mkdocs.yml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: 3.x
      - name: install mkdocs
        run: pip install mkdocs
      - name: deploy mkdocs
        run: mkdocs gh-deploy --force --clean --verbosesTo implement md2cf we need to be aware of how this translates the folder structure to Confluence Pages.
```

It is important to note that folders are created as empty pages, which can be modified through some [built-in behaviours](https://github.com/iamjackg/md2cf#uploading-folders).

The YAML file for the md2cf implementation to a cloud Confluence instance looks like the following:

```yaml
name: Publish md files to Confluence
on:
  push:
    branches:
      - main
    paths:
      - "docs/**"
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source
        uses: actions/checkout@v3
  
  
      - name: Setup Python-pip
        shell: bash
        run: |
          sudo apt-get update > /dev/null
          sudo apt-get install python3-pip -y
      - name: Install md2cf
        shell: bash
        run: |
          sudo pip install md2cf --upgrade
      - name: Deploy using md2cf
        shell: bash
        run: |
          md2cf --host ${{ vars.CONFLUENCE_HOST }} --username ${{ secrets.CONFLUENCE_USERNAME }} --password ${{ secrets.CONFLUENCE_PASSWORD }} \
            ./docs \
            --space ${{ vars.CONFLUENCE_SPACE }} \
            --parent-title 'Docs-As-Code from GitHub' \
            --only-changed \
            --strip-top-header
```

The implementation is rather simple, but that doesn’t change the importance of DaC!

You can find the full source code here: https://github.com/petermefrandsen/Docs-As-Code/

## Final Thoughts

By implementing Docs-As-Code, development teams can improve collaboration, ensure consistent and reliable documentation and increase discoverability. Teams should focus on choosing the right tooling, establishing clear guidelines, integrating documentation into the development process and encouraging collaboration to successfully implement Docs-As-Code.