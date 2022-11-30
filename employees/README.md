Description of the Project

1) Extract the content of the csv file.
2) Check which employees have worked on the same project.
3) Consider all possibilities for pairing employees who worked on the same project.
4) Check the dateFrom and dateTo of the members of each pair to see if they have worked together.
5) Calculate the workdays the pair has spent on the project. 
6) Calculate the sum of total workdays for all projects the pair has worked on.
7) Collect the projects and workdays of all pairs that can be found.
8) Compare all the pairs and select the one with the most combined workdays.
9) Present the pair's members IDs, the combined workdays, its projects and the workdays for each project. 


Application for the Project

1) I make a pair of tables that will present the exact data we are looking for from the csv file. If there is no data 
    or the data is incorrect, the <td> cells of the tables will read undefined.

2) I make a form that allows the user to select only csv files from his/her PC.

3) I use FileReader to extract all the data from the csv file and turn it into an array.

4) I check the content of the array to make sure all the data is correct before I proceed any further. If there is
    an error, a message will appear below the form to explain the problem with the csv file.

5) If the data is OK, I group the data about all projects in one object, where the projects IDs serve as properties. 
    Each property will contain array data about all employees, who have worked on that project.

6) I check all the employees working shedules in the "group object" and compare the shedules in pairs to see whether 
    the pair has worked at the same time on the project or not.

7) If a pair has worked together I calculate how many workdays did their teamwork last.

8) I save the data about each pair who has worked together - the IDs, the projects and days of teamwork.

9) I create an object to group the data about all pairs. If a pair has worked on multiple projects, each will be stored 
    as an array under a property named after the pair IDs.

10) As I group data about each pair's projects, I sum up the combined days it has worked on all projects and save it as 
    another object, where a pair's IDs serve as properties.  

11) I create two arrays - one with the keys and one with the values of the "combined days object".

12) I find the biggest value in the values array and use its index to find the corresponding pair IDs in the keys array.

13) Once I have the IDs of the pair with most workdays, I use the IDs to get the names of the projects it has worked 
    on and their work duration from the "pairs object".

14) I make an array with the IDs of the pair with most workdays and the workdays, the projects they have worked on and 
    the duration of each project. The data from the array is added into the two tables.


Additional Notes

1) The form, the tables and the app are created with React.
2) The data from the form is sent to the tables with the useState hook.
3) The application supports different types of JS date formats.
4) The files from the components folder are imported through modules. 