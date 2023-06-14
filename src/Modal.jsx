import React from "react";
import { Modal, Button } from "flowbite-react";

const ModalComponent = ({ showModal, recipe, closeModal }) => {
  return (
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Header>{recipe.name}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="border-2 p-2 flex gap-3 justify-between w-full"
              >
                <p>Quantity: {ingredient.quantity}</p>
                <p>Name: {ingredient.name}</p>
                <p>Type: {ingredient.type}</p>
              </li>
            ))}
          </ul>
          <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>I accept</Button>
        <Button color="gray" onClick={closeModal}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
