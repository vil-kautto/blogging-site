package fi.tuni.TemporaryName.webapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * The startup class executes the code in this class upon database startup
 *  @version 2020-05-07
 *  @since 2020-03-26
 */
@Component
public class Startup implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        printTeamDetails();
        printAdminDetails();
        printExampleCurl();
    }

    /**
     * PrintTeamDetails prints the team members names to the screen
     */
    public void printTeamDetails() {
        System.out.println("\n" +
                "--------------+---------------------+------------- \n" +
                "--------------+ Team TeamporaryName +------------- \n" +
                "+-------------+---------------------+------------+ \n" +
                "|  Blog TeamporaryName - A blog application      | \n" +
                "|  Made by Ville Kautto & Miika Minkkinen        | \n" +
                "+------------------------------------------------+");
    }

    public void printAdminDetails() {
        System.out.println("\n  Admin details: (Work in Progress) \n" +
                "+--------------------------------------------------------+ \n" +
                "|  Username:  admin                                      | \n" +
                "|  Password:  admin                                      | \n" +
                "+--------------------------------------------------------+\n");
    }

    public void printExampleCurl() {
        System.out.println("\nExample Curl commands: \n" +
                "---------------------------------------------------------- \n" +
                "List all blogs: curl -X GET localhost:8080/blogs \n" +
                "Adding:         curl -H \"Content-Type: application/json\" -X POST --data \"{\"title\": \"test\", \"body\": \"test\"}\" http://localhost:8080/blogs \n" +
                "Deleting by id: curl -X DELETE localhost:8080/blogs/id \n" +
                "Empty database: curl -X DELETE localhost:8080/blogs \n" +
                "----------------------------------------------------------");
    }
}
