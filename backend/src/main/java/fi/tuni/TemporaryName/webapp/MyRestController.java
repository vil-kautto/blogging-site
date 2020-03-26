package fi.tuni.TemporaryName.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * RestController for ("Weblogax?") blog hosting application
 * Handles incoming requests and manages changes in the database
 * @author Team TemporaryName - Ville Kautto
 * @version 2020.03.26
 * @since 2020.03.26
 */
@RestController
public class MyRestController {

    // Database for blog storing
    @Autowired
    BlogDatabase blogDatabase;

    // Adds 5 Blogs to the database upon creation, set false to disable
    private boolean includeTemplate = true;

    /**
     * Lists all the blogs in the database
     * url: localhost:8080/blogs/
     * @return returns all the blogs contained in the database
     */
    @RequestMapping("blogs")
    public Iterable<Blog> getBlogs() {
        if(includeTemplate) {
            generateTemplate();
        }
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
     * Usage: curl -H "Content-Type: application/json" \
     *   --request POST \
     *   --data '{"title":"<Custom title>","desc":"<Custom description>"}' \
     *   http://localhost:3000/blogs"
     */
    @RequestMapping(value = "/blogs", method = RequestMethod.POST)
    public void saveBlog(@RequestBody String title, String desc) {
        Blog b = new Blog(title, desc);
        blogDatabase.save(b);
        System.out.println("New database entry was created");
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

    /**
     * GenerateTemplate generates 5 example blogs upon startup
     * Can be controlled on by changing includeTemplate variable at the start of this file
     */
    public void generateTemplate() {
        System.out.println("Adding 5 sample entries to database");
        blogDatabase.save(new Blog("Example blog 1", "Sample text"));
        blogDatabase.save(new Blog("Example blog 2", "Now with some text"));
        blogDatabase.save(new Blog("Example blog 3", "Now with more text"));
        blogDatabase.save(new Blog("Example blog 4", "Now with more text"));
        blogDatabase.save(new Blog("Example blog 5", "Now with more text"));
    }

}
