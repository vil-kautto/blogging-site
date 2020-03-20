package fi.tuni.TemporaryName.webapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Startup implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        printAdminDetails();
        printExampleCurl();
    }

    public void printAdminDetails() {
        System.out.println("\n---------------------------------------------------------- \n" +
                "Admin details: (Work in Progress) \n" +
                "Username:  admin \n" +
                "Password:  admin \n" +
                "----------------------------------------------------------");
    }

    public void printExampleCurl() {
        System.out.println("\n---------------------------------------------------------- \n" +
                "Example Curl commands: (Work in Progress) \n" +
                "List all blogs:        curl -X GET localhost:8080/blogs/ \n" +
                "Adding:                curl -X POST -H \"Content-type: application/json\" \n" +
                "Deleting by id:        curl -X DELETE localhost:8080/blogs/id/ \n" +
                "Deleting all entries:  curl -X DELETE localhost:8080/blogs/ \n" +
                "----------------------------------------------------------");
    }
}
