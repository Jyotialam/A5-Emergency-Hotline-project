

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer - 
getElementById use for get only one element by id
getElementsByClassName use to get multiple elements by class
querySelector use to get 1st element by selector
querySelectorAll use to get all elements by selector
2. How do you **create and insert a new element into the DOM**?
Document.createElement("tagName")  use to create then use
appendChild () or append()         to insert into the dom

3. What is **Event Bubbling** and how does it work?
Answer:
when any event happens on a child el, it bubbles up to its parent,grandparent and the document that is event bubbling. 
💹
when we click a button inside a div. the div also receive the click.
4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
event delegation is a process of using a single event listener on a parent element to handle events on its child elements
💹

5. What is the difference between **preventDefault() and stopPropagation()** methods?
reventDefault() element er default kaj bhondo kore jemon form submit hole reload off kora
stopPropagation() event ke uporer parent element a propagate hote dae na
