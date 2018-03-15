
case "$1" in
    "") echo "Provide a component name" 
        ;;

    *)  mkdir "src/components/$1"
        cp "src/components/template/template.css" "src/components/$1/$1.css"
        cp "src/components/template/template.js" "src/components/$1/$1.js"
        ;;
esac