package fi.tuni.TemporaryName.webapp;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Blog POJO, which stores Blog's object data
 * @author Team TemporaryName - Ville Kautto
 * @version 2020.03.26
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
    private String desc;
    private String datetime;

    /**
     * Blank constructor for Blog objects
     */
    public Blog() {
        this.title = "Empty title";
        this.desc = "Empty Description";
        Date currentDate = new Date();
        SimpleDateFormat dateFormat =
                new SimpleDateFormat("yyyy-MM-dd hh:mm:ss a zzz");
        this.datetime = dateFormat.format(currentDate);
    }

    /**
     * Constructor for blog object with parameters
     * takes the blog's title and description as parameters
     * @param title blog title
     * @param desc blog Description - the main text box
     */
    public Blog(String title, String desc) {
        this.title = title;
        this.desc = desc;
        Date currentDate = new Date();
        SimpleDateFormat dateFormat =
                new SimpleDateFormat("yyyy-MM-dd hh:mm:ss a zzz");
        this.datetime = dateFormat.format(currentDate);
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
     * Sets a custom description for Blog
     * @param desc
     */
    public void setDesc(String desc) {
        this.desc = desc;
    }

    /**
     * Blog description's getter Method
     * @return description of the blog
     */
    public String getDesc() {
        return desc;
    }

    /**
     * Blog datetime's getter method
     * @return the creation date of the blog
     */
    public String getDatetime() {
        return datetime;
    }

    /**
     * ToString override
     * @return String with blog object data
     */
    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", title=" + title +
                ", desc=" + desc +
                '}';
    }
}
