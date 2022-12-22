const Description = ({ descriptionField, handleDescriptionChange }) => {
  return (
    <div className="description-container">
      <textarea
        data-testid="description"
        rows="50"
        cols="4"
        label="description"
        value={descriptionField}
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default Description;
