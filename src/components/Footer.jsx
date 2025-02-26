export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Subhash Kumar. All rights reserved.</p>
      </div>
    </footer>
  )
}

