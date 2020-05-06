package fi.tuni.TemporaryName.webapp;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Blog POJO, which stores Blog's object data
 * @author Team TemporaryName - Ville Kautto
 * @version 2020.05.06
 * @since 2020.03.26
 */
@Entity
@Table(name="Blogs")
public class Blog {
    /**
     * Blog contains id, title, desc and datetime for data and time management
     * id - Automatically incremented value, used for identifying blogs
     * title - Blog's title
     * desc - Blog's description
     * datetime - automatically generated timestamp
     */
    @Id
    @GeneratedValue
    private int id;
    private String title;
    private String body;
    private String datetime;
    private Comment[] comments;

    /**
     * Default constructor for Blog objects
     */
    public Blog() {
        this.title = "Empty title";
        this.body = "Empty Description";
        Date currentDate = new Date();
        SimpleDateFormat dateFormat =
                new SimpleDateFormat("dd.MM.yyyy HH:mm");
        this.datetime = dateFormat.format(currentDate);
    }

    /**
     * Constructor for blog object with parameters, mainly used in testing
     * takes the blog's title and description as parameters
     * @param title blog title
     * @param body blog Description - the main text box
     */
    public Blog(String title, String body) {
        this.title = title;
        this.body = body;
        Date currentDate = new Date();
        SimpleDateFormat dateFormat =
                new SimpleDateFormat("dd.MM.yyyy HH:mm");
         String date = dateFormat.format(currentDate);
        this.datetime = "created on " + date;
    }

    /**
     * Blog id's getter method
     * @return id of the blog
     */
    public int getId() {
        return id;
    }

    /**
     * Sets a custom title for the blog
     * @param title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Blog Title's getter method
     * @return title of the blog
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets a custom text for Blog
     * @param body
     */
    public void setBody(String body) {
        this.body = body;
    }

    /**
     * Blog description's getter Method
     * @return description of the blog
     */
    public String getBody() {
        return body;
    }

    /**
     * Blog datetime's getter method
     * @return the creation date of the blog
     */
    public String getDatetime() {
        return datetime;
    }

    /**
     * Updated blogs datetime upon editing
     */
    public void setDatetime() {
        Date currentDate = new Date();
        SimpleDateFormat dateFormat =
                new SimpleDateFormat("dd.MM.yyyy hh:mm");
        String date = dateFormat.format(currentDate);
        this.datetime = "edited on " + date;
    }

    public void setComments(Comment[] comments) {
        this.comments = comments;
    }

    public Comment[] getComments() {
        return comments;
    }


    /**
     * ToString override
     * @return String with blog object data
     */
    @Override
    public String toString() {
        return "{" +
                "id=" + id +
                ", title=" + title +
                ", body=" + body +
                ", comments=" + comments +
                "}";
    }
}
