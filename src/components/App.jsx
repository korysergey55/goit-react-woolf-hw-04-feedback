import FeedBack from "./feedback/Feedback";


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedBack />
    </div>
  );
};
