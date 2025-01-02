from flask import Flask, render_template, request, redirect, url_for, flash
import re, os

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Needed for flashing messages

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/subscribe', methods=['POST'])
def subscribe():
    email = request.form['email']
    email_pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'

    if not re.match(email_pattern, email):
        flash('Valid email required', 'error')
        return redirect(url_for('index'))
    
    # Add your logic to handle the subscription here
    # For example, save the email to a database or send a confirmation email

    flash('Subscription successful!', 'success')
    return redirect(url_for('thank_you', email=email))

@app.route('/thankyou')
def thank_you():
    email = request.args.get('email')
    return render_template('thankyou.html', email=email)

if __name__ == '__main__':
    port= int(os.environ.get('PORT', 5000))
    app.run(host="0.0.0.0", port=port) 