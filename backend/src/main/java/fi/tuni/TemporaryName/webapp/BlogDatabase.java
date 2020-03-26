package fi.tuni.TemporaryName.webapp;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Database interface for quering incoming requests
 * @version 2020.03.26
 * @since 2020.03.26
 */
public interface BlogDatabase extends CrudRepository<Blog, Long> {
    Blog findById(int id);
}