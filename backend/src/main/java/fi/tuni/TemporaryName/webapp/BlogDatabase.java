package fi.tuni.TemporaryName.webapp;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Database interface for database management
 * @version 2020-05-07
 * @since 2020-03-26
 */
public interface BlogDatabase extends CrudRepository<Blog, Integer> {
    Blog findById(int id);
    List <Blog> findAllByOrderByIdDesc();
}