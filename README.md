# How to Host a Markdown Resume on GitHub

----
The below image is an example of the diffrence between the markdown resume and the templated webpage:
![](MdToResume.gif)

## Why are we here?

This read-me will go into detail on how to learn and use the resources required to create and host a resume on GitHub Pages.  The technologies that are covered in this guide are [Jekyll](https://jekyllrb.com/), [Markdown](https://en.wikipedia.org/wiki/Markdown), and [GitHub](https://github.com/). I will also be referring to [Modern Technical Writing by Andrew Etter](https://www.amazon.ca/Modern-Technical-Writing-Introduction-Documentation-ebook/dp/B01A2QL9SS) throughout the guide. By the end of this guide, you should be able to put together a markdown resume hosted on a professional-looking webpage!

## Prerequisites:

This guide will require you to have some specific things listed below:

- Resume formatted in markdown
- GitHub Account 
- Web browser
- Time
- Willingness to learn


## Getting to work:

#### Step One: Research
The first step in any project as stated in Etter's book is learning about the subject. How much to learn is a common question. The answer although vague is everything. In this case, we are going to be hosting a resume on a static webpage so it's safe to assume that we should learn about resumes, web hosting, markdown formatting, and static site generators. After doing research on the topic and hosting my resume I recommend that you research: Markdown, Jekyll, and GitHub Pages specifically. Some recommended resources on each topic are available in the **Resources** section of this guide.

#### Step Two: Audience 
After coming off of our research binge we now get into something of a more nuanced setting, we need to figure out what we want to show. The content that we should be tailored to our audience and their specific needs. So for this step, we are going to want to deduce what our audience needs. Once we are done we will provide them with exactly that. To start we need to figure out what assumptions that we can make about the audience, are they a web development company that wants to see a modern looking webpage that excites them? Or is the audience generic HR recruiters that cannot tell the difference between a webpage and a browser? Knowing our audience allows us to make specific assumptions so that we can tailor our content for the best result. Once you know your audience start thinking about what they want from you and give them exactly that, no more and no less. This means that you should Tailor your resume content and the expectations of the webpage to fit the audience in a way that fulfills their expectations.

#### Step Three: The Pizzazz 
In this step, we have the task of taking all of our audience-specific content and putting it in a way that makes it look good, and makes it easy to use. To do this we can use a language called Markup. Markup allows us to format our text using a lightweight syntax that we can easily convert to HTML. This allows us to make our content stand out by having it be easily scannable, well organized, searchable, and looking good. These traits will make the audience's lives easier and make your resume look more appealing than your competitions. To do this putting things in specific orders, using headings, and using lists is recommended. For example, ordering when you present your education, experience, and skills in a way that puts the most impressive sections first is often a good choice, but keep in mind to follow the advice from step two. Once you have the resume filled out and formatted you must then choose a pre-made Jekyll theme or create your own.

#### Step Four: Hosting
In this step, we will host the current iteration of the resume. To start you must create a GitHub account. Once you have an account you will need to create a repository. Ideally, the repository will be named githubname.github.io as this will make the URL look more professional. (Note if you own a custom URL you can ignore the repository name since a custom URL can be used instead) Once you have a GitHub repository you will now want to create a readme where you can document changes and outline specific information. To do this create a file named README.md and use markdown to fill out any necessary information. Once the readme is complete we can start hosting our page. To do so create a file called index.md. Once the file is created copy all of the Markdown-formatted text in your resume to the file. Now that we have both the readme and the index file we can apply a Jekyll theme to the resume. You can do so by going into the repository settings and scrolling down to page settings, once there just click on the theme button and select whichever one you prefer. If you want to customize the theme or make any changes documentation is available in the readme file of the repository of said theme. Now that we have a base resume hosted we can use this as a draft and continue to improve it.

#### Step Five: Updating
Now that we have the resume formatted and hosted we want to be able to make it simple to update. To do so I recommend hosting .md files named Education, Experience, Skills, etc. These files should contain a template of each section that you can fill out and paste into the index file to add to those sections of the resume. In essence just like Etter's final step we are trying to make it as easy as possible to contribute to the content.

## Resources:
- [Markdown Tutorial](https://www.markdowntutorial.com/)
- [GitHub Pages Guide](https://guides.github.com/features/pages/)
- [Jekyll Tutorial](https://jekyllrb.com/tutorials/home/)
- [Modern Technical Writing by Andrew Etter](https://www.amazon.ca/Modern-Technical-Writing-Introduction-Documentation-ebook/dp/B01A2QL9SS) 

## Acknowledgments 
Template: https://github.com/pages-themes/midnight

## Frequently Asked Questions:
1)  Q: Why use markdown over word formatting?  
A: We use markdown since it allows us to convert the writing to a webpage, as well as having a more universal syntax as many applications support versions of markdown.

2)  Q: Why is the ReadMe showing as my webpage?  
A: This happens due to a bug with GitHub Pages, simply remove the ReadMe from the repository and re add it, this should allow for GitHub Pages to use the index.md file as the webpage content.

3) Q: How do I use a custom domain?  
A: To use a custom domain first purchase a domain from a provider such as https://www.name.com/ or https://www.namecheap.com/. Then follow the [official GitHub Pages guide](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-custom-domains-and-github-pages) 


