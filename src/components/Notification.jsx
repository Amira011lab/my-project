function Notification({ hasNewMessages }) {
    return (
        <div>
            <h2>Inbox</h2>
            {hasNewMessages && <p>You have new messages!</p>}
            {hasNewMessages && <h2>Fariimo ayaa kuu yaala</h2>}
        </div>
    );
}
export default Notification;