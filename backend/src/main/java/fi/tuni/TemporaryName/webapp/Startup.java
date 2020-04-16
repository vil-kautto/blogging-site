package fi.tuni.TemporaryName.webapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * The startup class executes the code in this class upon database startup
 *  @version 2020.03.26
 *  @since 2020.03.26
 */
@Component
public class Startup implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        printAdminDetails();
        printExampleCurl();
    }

    public void printAdminDetails() {
        System.out.println("\n  Admin details: (Work in Progress) \n" +
                "---------------------------------------------------------- \n" +
                "   Username:  admin \n" +
                "   Password:  admin \n" +
                "----------------------------------------------------------\n");
    }

    public void printExampleCurl() {
        System.out.println("\n  Example Curl commands: (Work in Progress)\n" +
                "---------------------------------------------------------- \n" +
                "   List all blogs:        curl -X GET localhost:8080/blogs \n" +
                "   Adding:                curl -X POST -H \"Content-Type:application/json\" title description \n" +
                "   Deleting by id:        curl -X DELETE localhost:8080/blogs/id \n" +
                "   Deleting all entries:  curl -X DELETE localhost:8080/blogs \n" +
                "----------------------------------------------------------");
    }
}
