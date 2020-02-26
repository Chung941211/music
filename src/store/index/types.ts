

interface Creator {
    userId: string,
    nickname: string
}

export interface PalyList {
    creator: Creator,
    coverImgUrl: string,
    name: string,
    id: string
}

export enum IndexActionType {
    INDEX_FETCH_REQUESTED = 'INDEX_FETCH_REQUESTED',
    INDEX_FETCH_SUCCEEDED = 'INDEX_FETCH_SUCCEEDED',
    INDEX_FETCH_FAILED = 'INDEX_FETCH_FAILED'
}

export interface IndexState {
    readonly loading: boolean
    readonly data: PalyList[]
    readonly errors?: string
}
