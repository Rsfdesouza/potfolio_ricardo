export function SkillsSection() {
  const skills = [
    { name: "React", icon: "fab fa-react", color: "blue" },
    { name: "TypeScript", icon: "fab fa-js-square", color: "yellow" },
    { name: "Node.js", icon: "fab fa-node-js", color: "green" },
    { name: "MongoDB", icon: "fas fa-database", color: "purple" },
    { name: "Git", icon: "fab fa-git-alt", color: "red" },
    { name: "AWS", icon: "fab fa-aws", color: "orange" },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-600 dark:text-blue-400",
      yellow: "from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 text-yellow-600 dark:text-yellow-400",
      green: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-600 dark:text-green-400",
      purple: "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-600 dark:text-purple-400",
      red: "from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 text-red-600 dark:text-red-400",
      orange: "from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-orange-600 dark:text-orange-400",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing
            digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${getColorClasses(
                  skill.color
                )} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
              >
                <i className={`${skill.icon} text-2xl`}></i>
              </div>
              <h3 className="font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
