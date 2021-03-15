For this project, I used CRA as the build. I brokedown the project into 3 main components. I thought that the project
was simple enough that only 3 deemed best. 

## State management
For state management, given the limited time that I have and scope of the project I didn't use Context or Redux. State when required is
simply passed as props.

## CSS
For CSS. I used styled components. I think the styled components worked well for this project. There is some CSS also used on the global scope.

## Other packages:
- moment:
  I used moment to manage time and date. It manages ISO format pretty nicely so it was simple to output data.
  
## Potential improvements
Given the limited time, I was not able to cover all corner cases. My goal for this project was to show my thinking 
behind building a React project.

Grouping the dates
Given the JSON format with the dates/day together. I used CSS to group the dates together. Ideally, I would use something like a hashset to check if 
the day is already in an array, then only render the day once.

Animations
I would have added some sort of animation given more time. I think that an application like this would have welcomed some sort of animation.

Testing
Given more time, I would have added unit testing. Mainly the funcionality behind adding a selected time and blocking out times that are selected.t
  
## Setup and installation

- Clone down the repo
```bash
npm i
npm start
```

Pick some times!
