export interface Action {
    message: string
    date: string
    projectId?: number
}

export default interface Project {
    id: number
    name: string
    status: 'Active' | 'Paused' | 'Completed'
    tag: string
    recent_actions: Action[]
}