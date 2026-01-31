interface Action {
    message: string
    date: string
}

export default interface Project {
    id: number
    name: string
    status: 'Active' | 'Paused' | 'Completed'
    last_updated: string
    tag: string
    recent_actions: Action[]
}