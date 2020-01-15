Higher Order components (HOC):

--> Used when we want to reuse the code of component.

It is a design pattern where a function takes component as an argument and returns a new component.

Let's see below:

const newComponent=higherOrderComponent(OriginalComponent)
                    or
const enhancedComponent=higherOrderComponent(originalComponent)

const IronMan=WithSuit(TonyStark)


---Note **

By default, props will passed to HOC of the component not on the respective component.