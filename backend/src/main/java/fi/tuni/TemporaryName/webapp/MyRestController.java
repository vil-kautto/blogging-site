package fi.tuni.TemporaryName.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

/**
 * RestController for blog hosting application
 * Handles incoming requests and manages changes in the database
 * @author Team TemporaryName - Ville Kautto
 * @version 2020-05-07
 * @since 2020-03-26
 */

@CrossOrigin
@RestController
public class MyRestController {

    // Database for blog storing
    @Autowired
    BlogDatabase blogDatabase;

    /**
     * Lists all the blogs in the database
     * url: http://localhost:8080/blogs/
     * @return returns all the blogs contained in the database
     */
    @RequestMapping("blogs")
    public Iterable<Blog> getBlogs() {
        // finds all the blogs in the database and return all of them in reversed order
        List<Blog> blogs = blogDatabase.findAllByOrderByIdDesc();

        // if the database is empty, add example blogs
        if(blogs.size() <= 0) {
            System.out.println("Database is empty, generating test blogs");
            generateTemplate();
            blogs = blogDatabase.findAllByOrderByIdDesc();
        }

        // returning blogs
        System.out.println("Returning all database entries");
        return blogs;
    }

    /**
     * GenerateTemplate generates 3 example blogs upon startup
     */
    public void generateTemplate() {
        blogDatabase.save(new Blog("Example blog 1", "Sample text"));
        blogDatabase.save(new Blog("Example blog number 2", "Now with more text"));
        blogDatabase.save(new Blog("I am title", "I am text"));
    }

    /**
     * Returns a blog based on blog's id
     * url: http://localhost:8080/blogs/{id}
     * @return returns a blog with specified id
     */
    @RequestMapping("blogs/{blogId}")
    public Blog getBlog(@PathVariable int blogId) {
        System.out.println("Returning a database entry with id of " + blogId);
        return blogDatabase.findById(blogId);
    }

    /**
     * Adds a blog to the database by sending a post request
     * url: http://localhost:8080/blogs
     */
    @RequestMapping(value = "/blogs", method = RequestMethod.POST)
    public String saveBlog(@RequestBody Blog b) {
        // Filtering inputs, that contain invalid number of characters
        if(validateString(b.getTitle()) && validateString( b.getBody() )) {
            blogDatabase.save(b);
            System.out.println("New database entry was created");
            return "A new blog was created";
        } else if(!validateString( b.getTitle() )) {
            System.out.println("Request denied, Title length is invalid");
            return "Given title is too short or too long!";
        } else if(!validateString( b.getBody() )) {
            System.out.println("Request denied, Body length is invalid");
            return "Given Blog text is too short or too long!";
        } else {
            return "Unknown error";
        }
    }

    /**
     * Checks if given text is too long or short, returns true when the text is valid
     * @param text Either the blog's title or body
     * @return The state of validated string
     */
    private boolean validateString(String text) {
        if(text.length() < 2040 && text.length() > 0 ) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * a Blog in the database by sending a post request to specified post
     * url: http://localhost:8080/blogs/1
     */
    @RequestMapping(value = "/blogs/{blogId}", method = RequestMethod.POST)
    public String editBlog(@PathVariable int blogId, @RequestBody Blog b) {
        // Validating inputs, in case there are invalid number of characters, see above method
        if(validateString(b.getTitle()) && validateString( b.getBody() )) {

            // Assign given values after validation and save the edited entry
            Blog blog = blogDatabase.findById(blogId);
            blog.setTitle(b.getTitle());
            blog.setBody(b.getBody());
            blog.setDatetime();
            blogDatabase.save(blog);

            System.out.println("Database entry was changed");
            return "Edited a blog with an id: " + blog.getId();
        } else if(!validateString( b.getTitle() )) {
            System.out.println("Request denied, Title length is invalid");
            return "Given title is too short or too long!";
        } else if(!validateString( b.getBody() )) {
            System.out.println("Request denied, body length is invalid");
            return "Given blog text is too short or too long!";
        } else {
            return "Unknown error";
        }
    }

    /**
     * Deletes all the blogs from the database
     * url: http://localhost:8080/blogs
     */
    @RequestMapping(value = "/blogs", method = RequestMethod.DELETE)
    public String deleteAll() {
        blogDatabase.deleteAll();
        System.out.println("All database entries deleted");
        return "All database entries deleted";
    }

    /**
     * Deletes a blog based on given blogId
     * url: http://localhost:8080/blogs/blogId
     * @param blogId id of the blog that should be deleted
     */
    @RequestMapping(value ="blogs/{blogId}", method = RequestMethod.DELETE)
    public String deleteBlog(@PathVariable int blogId) {
        System.out.println("Deleted a blog with id of  " + blogId);
        blogDatabase.deleteById(blogId);
        return "Deleted a blog with an id of: " + blogId;
    }

}
