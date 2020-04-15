package fi.tuni.TemporaryName.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * RestController for blog hosting application
 * Handles incoming requests and manages changes in the database
 * @author Team TemporaryName - Ville Kautto
 * @version 2020.04.16
 * @since 2020.03.26
 */
@RestController
public class MyRestController {

    // Database for blog storing
    @Autowired
    BlogDatabase blogDatabase;

    /**
     * Lists all the blogs in the database
     * url: localhost:8080/blogs/
     * @return returns all the blogs contained in the database
     */
    @RequestMapping("blogs")
    public Iterable<Blog> getBlogs() {
        return blogDatabase.findAll();
    }

    /**
     * Returns a blog based on blog's id
     * url: localhost:8080/blogs/{id}
     * @return returns a blog with specified id
     */
    @RequestMapping("blogs/{id}")
    public Blog getBlog(@PathVariable int blogId) {
        System.out.println("Returning a database entry with id of " + blogId);
        return blogDatabase.findById(blogId);
    }

    /**
     * Adds a blog to the database
     * curl -H "Content-type: application/json" -X POST -d "{\"title\": \"Blog Title\", \"body\": \"This is the body\"}",  http://localhost:8080/blogs
     */
    @RequestMapping(value = "/blogs", method = RequestMethod.POST)
    public void saveBlog(@RequestBody Blog b) {
        System.out.println("New database entry was created");
        blogDatabase.save(b);
    }

    /**
     * Deletes all the blogs from the database
     * Usage: curl -X DELETE http://localhost:8080/blogs
     */
    @RequestMapping(value = "/blogs", method = RequestMethod.DELETE)
    public void deleteAll() {
        blogDatabase.deleteAll();
        System.out.println("All database entries deleted");
    }

    /**
     * Deletes a blog based on given id
     * @param blogId id of the blog that should be deleted
     */
    @RequestMapping(value ="blogs/{id}", method = RequestMethod.DELETE)
    public void deleteBlog(@PathVariable long blogId) {
        System.out.println("deleted a blog with id of  " + blogId);
        blogDatabase.deleteById(blogId);
    }



}
