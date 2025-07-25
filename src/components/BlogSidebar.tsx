import { NavLink } from "react-router-dom";
import { ChevronRight, ChevronDown, BookOpen, Code, Settings, FileText } from "lucide-react";
import { useState } from "react";
import { blogCategories } from "@/data/blog-posts";
import { cn } from "@/lib/utils";

const categoryIcons = {
  "getting-started": BookOpen,
  "tutorials": FileText,
  "api-reference": Code
};

export function BlogSidebar() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "getting-started" // Default to expanded
  ]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="w-64 bg-docs-nav border-r border-docs-border h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Settings className="h-6 w-6 text-docs-nav-active" />
          <h1 className="text-xl font-bold text-docs-nav-foreground">Documentation</h1>
        </div>

        <nav className="space-y-2">
          {blogCategories.map((category) => {
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
            const isExpanded = expandedCategories.includes(category.id);

            return (
              <div key={category.id} className="space-y-1">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={cn(
                    "flex items-center justify-between w-full p-2 text-left rounded-lg transition-colors",
                    "hover:bg-accent text-docs-nav-foreground font-medium"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{category.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>

                {isExpanded && (
                  <div className="ml-6 space-y-1">
                    {category.posts.map((postId) => (
                      <NavLink
                        key={postId}
                        to={`/${postId}`}
                        className={({ isActive }) =>
                          cn(
                            "block px-3 py-2 text-sm rounded-lg transition-colors",
                            isActive
                              ? "bg-docs-nav-active text-docs-nav-active-foreground font-medium"
                              : "text-docs-nav-foreground hover:bg-accent"
                          )
                        }
                      >
                        {postId.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}