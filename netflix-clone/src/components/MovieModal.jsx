import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function MovieModal({ show, handleClose, movie }) {
    if (!movie) return null;

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="img-fluid"
                />
                <p>{movie.overview}</p>
                <p><strong>Data de Lançamento:</strong> {movie.release_date}</p>
                <p><strong>Avaliação:</strong> {movie.vote_average}</p>
                <p><strong>Elenco:</strong> {/* Adicione informações de elenco se disponível */}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MovieModal;
