package fi.tuni.TemporaryName.webapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * POJO for comments located within the blogs
 * @version 2020.04.16
 * @since 2020.04.16
 */
@Entity
public class Comment {
    @GeneratedValue
    @Id
    private int id;
    private String author;
    private String body;
    private String datetime;

    /**
     * Blank constructor for Blog objects
     */
    public Comment() {
        this.author = "Anonymous";
        this.body = "Empty Comment";
        Date currentDate = new Date();
        SimpleDateFormat dateFormat =
                new SimpleDateFormat("yyyy-MM-dd hh:mm:ss a zzz");
        this.datetime = dateFormat.format(currentDate);
    }

    public Comment(String author, String body) {
        this.author = author;
        this.body = body;
        Date currentDate = new Date();
        SimpleDateFormat dateFormat =
                new SimpleDateFormat("yyyy-MM-dd hh:mm:ss a zzz");
        this.datetime = dateFormat.format(currentDate);
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + this.id +
                ", title=" + this.author +
                ", body=" + this.body +
                ", datetime=" + this.datetime +
                '}';
    }
}