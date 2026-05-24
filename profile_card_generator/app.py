from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/generate-profile', methods=['POST'])
def generate_profile():

    data = request.get_json()

    name = data.get('name')
    bio = data.get('bio')
    image = data.get('image')

    if not name or not bio or not image:
        return jsonify({
            'success': False,
            'message': 'Please fill all fields'
        })

    return jsonify({
        'success': True,
        'profile': {
            'name': name,
            'bio': bio,
            'image': image
        }
    })


if __name__ == '__main__':
    app.run(debug=True)