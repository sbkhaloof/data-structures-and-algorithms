# Hashtables
<!-- Short summary or background information -->
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash.

## Challenge
<!-- Description of the challenge -->
Implementation: Hash Tables 

### Implement a Hashtable Class with the following methods:

1. add
2. get 
3. contains
4. hash
 then test our code 

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
+ I undertand the problem first
+ I imagined how the results should be
+ I wrote the code: create class node , class linkedlist and class hash table , write the add , get ,contains and hash methods .
+ I made the tests and check it .

#### BIG O :
time and space complexity 
O(1)

## API
<!-- Description of each method publicly available in each of your hashtable -->

1. add method : The add method adds key/value pairs in the hash table. To get started, create a method called add with two arguments, key and value. Hash the key with a hash function.
Then add the key/value pairs into the bucket. We will store our data in buckets.

2. get method : The get method helps us fetch the data using a key. Create method get with one argument, key. Hash the key and get the bucket’s index.
Retrieving or searching data in a hash table take place very fast. We can quickly get the index.

3. contains method: The contains method helps us check if the data using a key is exists in hash table or not . Create method contains with one argument, key. Hash the key and return true or false .

4. hash method: A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hashtable, it is used to determine the index .
