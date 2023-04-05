export function FeedbackOptions({options, addFeedback}) {
    return options.map(name => {
        return <button onClick={addFeedback}  name={name} type="button">{name}</button>
    })}

