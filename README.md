# greetings
This is a Hello World code base to show how you can do feature toggling.
There are three PRs created on this code base to show you different ways (not all the right way) of doing feature toggling.

## First try - Add toggling to the functions
The PR titled "First try - Add toggling to the functions" is one that works but is pretty awful.
It mixes the function with concerns of feature toggling so it breaks the single responsibility principle.
It also gets the toggle value in the actual function so it is not testable.
And also deleting of it is pretty messy because you will need to manipulate the very function that has the new behaviour. This can potentially introduce a bug to the code which in fact will be defeating the purpose of feature toggling.

## Second try - Make it unit testable
The PR titled "Second try - Make it unit testable" makes things a lot better. The function is in fact unit testable and at least. But it still breaks the single responsibility principle.
Deleting the toggled code is also still pretty messy.


## Third try - Make things better
The PR titled "Third try - Make things better" addresses those two issues of single responsibility principle and having things very nicely testable. It also makes deleting the toggled code very issue and pretty much bullet proof. You should be able to delete the toggled code with closed eyes. Give it a try!

