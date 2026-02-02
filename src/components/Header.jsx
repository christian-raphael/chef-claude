import chefClaudeLogo from "../assets/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header-image" src={chefClaudeLogo} alt="Chef Claude Icon" />
            <h1 className="header-title">Chef Claude</h1>
        </header>
    )
}