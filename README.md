# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->
## Scalability Considerations

### Component-Based Architecture

I structured this app to have reusable React components, allowing for easier maintenance and scalability. Page creationg, readability, testing, themeing and stlying are all things I took into consideration while architecting this app. 
### Responsive Design

I chose to use Emotion.js due to familiarity and it allows responsive design at the component level. This reduces overhead when the app scales to large codebases.

### API Abstraction

API calls are abstracted away from components into utility files, to simplify component logic and make it easier to manage changes to the API or the addition of new endpoints as the backend scales.

###TODO

I was not able to get to everything but there are more areas that I believe could be improved within the app.

- Integration and Unit Testing

- Refined Responsive Styling

- I would ensure the app is more accessibility compliant

- I like the idea of a proxy server setup for extra security but not necessary

- I would enjoy building a version of this in Next.js and Typescript