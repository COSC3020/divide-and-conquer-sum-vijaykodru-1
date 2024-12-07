function divideAndConquerSum(a) {
    function recursion(a) {
        // Base case with no elements returns a empty array
        if (a.length === 0) {
            return 0;
        }
        // Base case with only on element returns the element (nothing to add)
        else if (a.length === 1) {
            return a[0];
        }
        //More than 1 element does the divide and conquer sum
        else {
            var middle = Math.ceil(a.length / 3);

            // Divide the array into three parts
            var Left = a.slice(0, middle);                 
            var Middle = a.slice(middle, middle * 2 + 1);  
            var Right = a.slice(middle * 2 + 1);           

            //calculate the divide and conquer sum of the three divided arrays (recursively)
            return recursion(Left) + recursion(Middle) + recursion(Right);
        }
    }

    // Call the helper function
    return recursion(a);
}
