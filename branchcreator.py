import os

def generate_directory_tree(directory, ignore_list=None):
    if ignore_list is None:
        ignore_list = []
    ignore_list.append('.')  
        
    tree = {}
    try:
        for item in os.listdir(directory):
            if item.startswith('.') or item in ignore_list:
                continue
            
            item_path = os.path.join(directory, item)
            try:
                if os.path.isdir(item_path):
                    tree[item] = generate_directory_tree(item_path, ignore_list)
                else:
                    tree[item] = None
            except PermissionError:
                tree[item] = "Permission Denied"
    except PermissionError:
        return "Permission Denied"
    return tree

def write_directory_tree_to_file(tree, file_path, indent=0):
    with open(file_path, 'w') as file:
        write_directory_tree_recursive(tree, file, indent)

def write_directory_tree_recursive(tree, file, indent=0):
    for item, content in tree.items():
        file.write("  " * indent + "|-" + item + '\n')
        if isinstance(content, dict):
            write_directory_tree_recursive(content, file, indent+1)
        elif content == "Permission Denied":
            file.write("  " * (indent+1) + "|-" + content + '\n')

directory_path = '.'
ignore_list = ['dist','node_modules']  
directory_tree = generate_directory_tree(directory_path, ignore_list)
output_file_path = 'directory_tree.txt'
write_directory_tree_to_file(directory_tree, output_file_path)
print(f"Directory tree has been saved to {output_file_path}")
