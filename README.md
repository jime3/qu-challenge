Qu Challenge.

1. What's a closure? Where in the code is there a closure?
2. Which are the potential side-effects in any function? Could you point out any of these cases in
your code? Are they expected? Can they be avoided?

1. A closure occurs when a function is defined inside another function(the outer function), and this inner function retains access to the variables of the outer function, even after the outer function has finished executing.
 An example of a clouser in the code is:

   const handlePagination = (currentPage) => {
      setCurrentPage(currentPage);
     };
When handlePagination is passed as a callback to the paginate prop of the Pagination component, it forms a closure. This closure retains access to the setCurrentPage function from the outer scope of the App component. 
So, when the Pagination component runs handlePagination, it can still modify the currentPage state.

2. Potential side effects in any function include:

-Asynchronous operations 
-Network requests and interactions with external APIs
-Modifying external state
-Console output
-I/O operations 
-DOM manipulation
-Timing and delays
-Global event listeners

In the App.js file the data fetching inisde the useEffect is an example of side effect.
In the context of a React component, the data fetching side effect is generally expected. This type of side effect can not be avoided but you can manage/control them. You can verify some diretions like be sure data fetching occurs at the right time during the component lifecycle, handle loading and error states, and clean up resources when the component unmounts. 
