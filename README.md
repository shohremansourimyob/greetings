# greetings
This is a Hello World code base. We have received a new requirement to change what we have as our opening for greeting.

***New Requirement:*** 

```
Our opening is so boring. We need our opening to be "Yo! Sup?"
```

We decide to use feature toggling to manage risk and also hide the work that is in progress.

This code base shows how you can do feature toggling gracefully.

There are three PRs created on this code base to show you different ways (not all the right way) of doing feature toggling.

## First try - Adds toggling to the functions
<p>
The PR titled "First try - Add toggling to the functions" is one that works but is pretty awful.
It mixes the function with concerns of feature toggling so it breaks the single responsibility principle.
It also gets the toggle value in the actual function so it is not testable.
And also deleting of it is pretty messy because you will need to manipulate the very function that has the new behaviour. This can potentially introduce a bug to the code which in fact will be defeating the purpose of feature toggling.</p>
<br>

## Second try - Makes it unit testable
<p>
The PR titled "Second try - Make it unit testable" makes things a lot better. The function is in fact unit testable and at least. But it still breaks the single responsibility principle.
Deleting the toggled code is also still pretty messy.</p>
<br>

## Third try - Makes things better
<p>
The PR titled "Third try - Make things better" addresses those two issues of single responsibility principle and having things very nicely testable. It also makes deleting the toggled code very issue and pretty much bullet proof. You should be able to delete the toggled code with closed eyes. Give it a try!
</p>