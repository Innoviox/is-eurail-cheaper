// wrapper for bulma level
export function LevelLeft({children}) {
    return (
        <div className="level-left">
            {children}
        </div>
    )
}

export function LevelRight({children}) {
    return (
        <div className="level-right">
            {children}
        </div>
    )
}

export function LevelItem({children}) {
    return (
        <div className="level-item">
            <div>
                {children}
            </div>
        </div>
    )
}

export function Level({children}) {
    return (
        <div className="level">
            {children}
        </div>
    )
}