import Button from "./Button";

export default function ButtonGroup({
  markAllAsComplete,
  markAllAsIncomplete,
  resetToInitial,
  removeAllItems,
}: {
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  resetToInitial: () => void;
  removeAllItems: () => void;
}) {
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text}
          onClick={button.onClick}
          buttonType="secondary"
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
